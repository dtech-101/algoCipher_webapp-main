import { Box, Button, CircularProgress, Grid, IconButton, InputLabel, Stack, Tooltip, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react"
import { ExtraSmallText, ModerateText } from "../Shared/Texts";
import { TextAreaInput, TextInput, VisuallyHiddenInput } from "../Shared/Inputs";
import { CaretLeft, DotsThreeOutline, Paperclip } from "phosphor-react";
import { Player } from "@lottiefiles/react-lottie-player";
import './index.css'
import useApi from "../../hooks/api/useApi";
import buySellAnimation from '../../assets/animations/buySellChart.json';
import useLookups from "../../hooks/useLookups";
import { Dropdown, IDropdownOption } from "../Shared/Dropdown";
import { projectCategory, projectSolutionLanguage, projectSolutionPlatform, projectTimeline } from "../../types/lookup";
import { addProject } from "../../services/api/projectApi";
import { toast } from "react-toastify";
import { ICreateProjectPayload } from "../../types/project";

interface IAddEditProjectProps {
    onSubmit: (data: FormData) => void,
}

interface IAddEditProjectHeaderProps {
    onExit: () => void
}
export const AddEditProjectHeader = ({
    onExit
}: IAddEditProjectHeaderProps) => {

    return (
        <Stack direction='row' spacing={2}>
            <IconButton
                onClick={onExit}
            >
                <CaretLeft size={35} weight="bold" color="#2e7d" />
            </IconButton>
            <Stack direction='column'
                display='flex'
                alignItems='left'
                spacing={0}
            >
                <ModerateText>
                    Create New Project
                </ModerateText>
                <ExtraSmallText>
                    Fill in the form to create a new project
                </ExtraSmallText>
            </Stack>
        </Stack>
    );
}

const initialFormData = {
    title: '',
    description: '',
    category: '',
    platform: '',
    language: '',
    timeline: '',
    files: []
};

const maxFilesUpload = 8;

const AddEditProject = ({
    onSubmit
}: IAddEditProjectProps) => {
    const { apiToken, api } = useApi();
    const { fetchLookup } = useLookups();

    const [formData, setFormData] = useState<ICreateProjectPayload>(initialFormData);
    const [projectCategories, setProjectCategories] = useState<IDropdownOption[]>([]);
    const [projectLanguages, setProjectLanguages] = useState<IDropdownOption[]>([]);
    const [projectPlatforms, setProjectPlatforms] = useState<IDropdownOption[]>([]);
    const [projectTimes, setProjectTimes] = useState<IDropdownOption[]>([]);
    const [error, setError] = useState<any>(null);
    const [pendingChanges, setPendingChanges] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getLookups = async () => {
            await fetchLookup(projectCategory, api)
                .then((categories) => {
                    setProjectCategories(categories.map((category) => {
                        return {
                            key: category.key,
                            value: category.description
                        }
                    }));
                });

            await fetchLookup(projectSolutionLanguage, api)
                .then((languages) => {
                    setProjectLanguages(languages.map((language) => {
                        return {
                            key: language.key,
                            value: language.description
                        }
                    }));
                });

            await fetchLookup(projectSolutionPlatform, api)
                .then((platforms) => {
                    setProjectPlatforms(platforms.map((platform) => {
                        return {
                            key: platform.key,
                            value: platform.description
                        };
                    }));
                });

            await fetchLookup(projectTimeline, api)
                .then((timelines) => {
                    setProjectTimes(timelines.map((timeline) => {
                        return {
                            key: timeline.key,
                            value: timeline.description
                        }
                    }));
                });
        };

        if (apiToken) {
            getLookups();
        }
    }, [apiToken]);

    const removeFile = (file: File) => {
        const files = formData.files.filter((item) => item.name != file.name);
        onChangeHandle('files', files);
    };

    const handleFileUpload = (file: File | null) => {
        if (!file || formData.files.length >= maxFilesUpload) return;
        // TODO :: add validation for file type and size
        if (formData.files.map((item) => item.name).includes(file?.name)) {
            return;
        }
        const files = [...formData.files, file];
        onChangeHandle('files', files);
    }

    const onChangeHandle = (
        name: string,
        value: any
    ) => {
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
        const errors = error;
        errors && errors[name] && delete errors[name];
        setError(errors);
    };

    const handleSubmit = () => {
        var errors = validateFields();
        if (errors.title || errors.description
            || errors.category || errors.language
            || errors.platform || errors.timeline) {
            setError(errors);
        }
        else {
            setIsLoading(true);
            addProject(api, formData)
                .then((result) => {
                    toast('New project created', {
                        type: 'success'
                    });
                    setIsLoading(false);
                })
                .catch((error) => {
                    toast(error?.message, {
                        type: 'error'
                    });
                    setIsLoading(false);
                })
        }
    }

    const validateFields = () => {
        let errors: any = {};
        if (!formData.title) {
            errors.title = "*Required";
        }
        if (!formData.description) {
            errors.description = "*Required";
        }
        if (!formData.category || formData.category == 'placeholder') {
            errors.category = 'Please select';
        }
        if (!formData.language || formData.language == 'placeholder') {
            errors.language = 'Please select';
        }
        if (!formData.platform || formData.platform == 'placeholder') {
            errors.platform = 'Please select';
        }
        if (!formData.timeline || formData.timeline == 'placeholder') {
            errors.timeline = 'Please select';
        }
        return errors;
    };

    const isFormSubmitDisabled = useMemo(() => {
        return (
            isLoading
            || error?.title || error?.description
            || error?.category || error?.language
            || error?.platform || error?.timeline
        )
    }, [error, isLoading])

    return (
        <Box width='100%'
            height="100%"
            className="white"
        >
            <Grid direction='row'
                container
                width='100%'
                height='100%'
            >
                <Grid item
                    md={7}
                    xs={12}
                    lg={7}
                    xl={7}
                    height='100%'
                >
                    <Stack direction='column'
                        p={5}
                        className="hide-scrollbar"
                        spacing={2}
                        sx={{
                            overflow: 'scroll',
                            height: '80vh',
                        }}>
                        <Box >
                            <ModerateText ml={1}>Details</ModerateText>
                        </Box>
                        <Grid container direction='row'>
                            <Grid item
                                md={6}
                                xl={6}
                                lg={6}
                                xs={12}
                            >
                                <InputLabel>
                                    Project Name
                                </InputLabel>
                                <TextInput type="text" placeholder="E.g. &quot;An Expert Advisor based on ADX needed.&quot;" sx={{
                                    height: '2.5rem !important',
                                    width: '90% !important'
                                }} onChange={(e) => {
                                    onChangeHandle('title', e.target.value)
                                }} />
                                <ExtraSmallText className="input-err">
                                    {error?.title && error.title}
                                </ExtraSmallText>
                            </Grid>

                            <Grid item
                                md={6}
                                xl={6}
                                lg={6}
                                xs={12}
                            >
                                <InputLabel>
                                    Category
                                </InputLabel>
                                <Dropdown sx={{
                                    width: '90% !important',
                                    height: '2.5rem !important',
                                    padding: '0px !important',
                                    paddingLeft: '5px !important',
                                }}
                                    inputName="category"
                                    options={projectCategories}
                                    onChange={onChangeHandle}
                                    placeholder="Please Select"
                                    selected={projectCategories.find((item) => item.key == formData.category)}
                                />
                                <ExtraSmallText className="input-err">
                                    {error?.category && error.category}
                                </ExtraSmallText>
                            </Grid>

                            <Grid item
                                md={6}
                                xl={6}
                                lg={6}
                                xs={12}
                                mt={2}
                            >
                                <InputLabel>
                                    Platform
                                </InputLabel>
                                <Dropdown sx={{
                                    width: '90% !important',
                                    height: '2.5rem !important',
                                    padding: '0px !important',
                                    paddingLeft: '5px !important',
                                }}
                                    inputName="platform"
                                    options={projectPlatforms}
                                    onChange={onChangeHandle}
                                    placeholder="Please Select"
                                    selected={projectPlatforms.find((item) => item.key == formData.platform)}
                                />
                                <ExtraSmallText className="input-err">
                                    {error?.platform && error.platform}
                                </ExtraSmallText>
                            </Grid>

                            <Grid item
                                md={6}
                                xl={6}
                                lg={6}
                                xs={12}
                                mt={2}
                            >
                                <InputLabel>
                                    Language
                                </InputLabel>
                                <Dropdown sx={{
                                    width: '90% !important',
                                    height: '2.5rem !important',
                                    padding: '0px !important',
                                    paddingLeft: '5px !important',
                                }}
                                    inputName="language"
                                    options={projectLanguages}
                                    onChange={onChangeHandle}
                                    placeholder="Please Select"
                                    selected={projectLanguages.find((item) => item.key == formData.language)}
                                />
                                <ExtraSmallText className="input-err">
                                    {error?.language && error.language}
                                </ExtraSmallText>
                            </Grid>
                        </Grid>
                        <Box>
                            <InputLabel>
                                Description
                            </InputLabel>
                            <TextAreaInput
                                placeholder="Please provide a detailed and concise list of your requirements in the Requirements Specification section. This will allow us to accurately assess the complexity, cost, and required execution time of your project. A vague or generic description may result in your order being ignored or may require additional time to clarify details. Please keep in mind that investing time in preparing a clear and detailed Requirements Specification upfront will save you time and prevent misunderstandings later on during the project's execution or when reviewing the final results."
                                sx={{
                                    width: '95% !important'
                                }} onChange={(e) => onChangeHandle('description', e.target.value)} />
                            <ExtraSmallText className="input-err">
                                {error?.description && error.description}
                            </ExtraSmallText>
                        </Box>
                        <div className="divider"></div>
                        <Box >
                            <ModerateText mt={5} ml={1}>Budget and Estimated Period</ModerateText>
                        </Box>
                        <Grid container direction='row'>
                            <Grid item
                                md={6}
                                xl={6}
                                lg={6}
                                xs={12}
                            >
                                <InputLabel>
                                    Estimated Period
                                </InputLabel>
                                <Dropdown sx={{
                                    width: '90% !important',
                                    height: '2.5rem !important',
                                    padding: '0px !important',
                                    paddingLeft: '5px !important',
                                }}
                                    inputName="timeline"
                                    options={projectTimes}
                                    onChange={onChangeHandle}
                                    placeholder="Please Select"
                                    selected={projectTimes.find((item) => item.key == formData.timeline)}
                                />
                                <ExtraSmallText className="input-err">
                                    {error?.timeline && error.timeline}
                                </ExtraSmallText>
                            </Grid>
                            <Grid item
                                md={6}
                                xl={6}
                                lg={6}
                                xs={12}
                            >
                                <InputLabel>
                                    Estimated Budget (Optional)
                                </InputLabel>
                                <Stack direction='row'>
                                    <TextInput min={0} type="number" placeholder="From" sx={{
                                        height: '2.5rem !important',
                                        width: '30% !important'
                                    }} onChange={(e => onChangeHandle('budgetTo', e.target.value))} />
                                    <Typography marginLeft={1} marginRight={1}>
                                        <DotsThreeOutline size={32} weight="bold" />
                                    </Typography>
                                    <TextInput type="number" placeholder="To" sx={{
                                        height: '2.5rem !important',
                                        width: '30% !important'
                                    }} onChange={(e) => onChangeHandle('budgetFrom', e.target.value)} />
                                </Stack>
                                <ExtraSmallText className="input-err">
                                    {error?.budget && error.budget}
                                </ExtraSmallText>
                            </Grid>
                        </Grid>
                        <div className="divider"></div>
                        <Stack direction='row' spacing={1} mt={5} ml={1}>
                            <ModerateText>
                                Attachments
                            </ModerateText>
                            <ExtraSmallText sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                {` (${formData.files.length}/${maxFilesUpload}) `}
                            </ExtraSmallText>
                        </Stack>
                        <Grid direction='row'
                            container
                        >
                            {formData?.files.length == 0
                                ? <ExtraSmallText>No files chosen...</ExtraSmallText>
                                : formData.files.map((item) =>
                                    <Grid item
                                        md={3}
                                        xl={3}
                                        lg={3}
                                        xs={3}
                                        mt={1}
                                    >
                                        <Tooltip title={`Click to remove ${item}`}>
                                            <span
                                                className="file-item"
                                                onClick={() => removeFile(item)}
                                            >
                                                {item.name}
                                            </span>
                                        </Tooltip>
                                    </Grid>
                                )}
                        </Grid>
                        <Box>
                            <Button
                                className="upload-file"
                                component="label"
                                startIcon={<Paperclip size={15} />}
                                sx={{
                                    marginTop: '10px'
                                }}
                                disabled={formData.files.length >= maxFilesUpload}
                            >
                                Attach file
                                <VisuallyHiddenInput
                                    type="file"
                                    max={1}
                                    accept=".doc,.docx,.xml,application/msword,image/*,video/*,.pdf"
                                    onChange={(e) => {
                                        handleFileUpload(e.target.files?.item(0) ?? null)
                                    }} />
                            </Button>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <Button variant="contained"
                                className="submit"
                                color="success"
                                disabled={isFormSubmitDisabled}
                                onClick={handleSubmit}
                            >
                                {isLoading ?
                                    <CircularProgress size='1.5rem' color="inherit" />
                                    :
                                    "Submit"}
                            </Button>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item
                    md={5}
                    xs={0}
                    lg={5}
                    xl={5}
                >
                    <Box display={{
                        md: 'flex',
                        lg: 'flex',
                        xl: 'flex',
                        xs: 'none'
                    }} sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    }}>
                        <Player
                            src={buySellAnimation}
                            speed={1}
                            autoplay
                            keepLastFrame
                            background="transparent"
                            loop={true}
                        >
                        </Player>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
}
export default AddEditProject;