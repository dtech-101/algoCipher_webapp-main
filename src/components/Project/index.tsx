import { Button, Stack } from "@mui/material";
import { ExtraSmallText, ModerateText } from "../Shared/Texts";


export const ProjectsTopLeftHeader = () => {

    return (
        <Stack direction='column'
            display='flex'
            alignItems='left'
            spacing={0}
        >
            <ModerateText>
                Projects
            </ModerateText>
            <ExtraSmallText>
                Select a project to begin or create a new one
            </ExtraSmallText>
        </Stack>
    );
};

interface IProjectsTopRightHeaderProps {
    addProject: () => void
}

export const ProjectsTopRightHeader = ({
    addProject
}: IProjectsTopRightHeaderProps) => {

    return (
        <Stack direction='row'
            display='flex'
            alignItems='center'
            spacing={0}
            mr={5}
        >
            <Button
                variant="contained"
                color="success"
                sx={{
                    textTransform: 'none'
                }}
                onClick={addProject}
            >
                New Project
            </Button>
        </Stack>
    );
};

const Projects = () => {

    return <div>
        <p>
            Messages will go here
        </p>
    </div>
};

export default Projects;