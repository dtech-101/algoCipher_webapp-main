import { Button, IconButton, Stack, Icon } from "@mui/material";
import MsalAuthenticationWrapper from "../../components/Authentication/MsalAuthenticationWrapper";
import AuthLayout from "../../layouts/auth";
import { DashboardLayout } from "../../layouts/dashboard";
import { ActionButton, NavLinkButton } from "../../components/Shared/Buttons";
import { useNavigate } from "react-router";
import { right } from "@popperjs/core";
import { PlusCircle } from "phosphor-react";
import { ExtraSmallText, MediumText, ModerateText, SmallText } from "../../components/Shared/Texts";
import { useEffect, useState } from "react";
import { ISidePanelContentProps, ITopHeaderContentProps } from "../../layouts/dashboard/types";
import AddEditProject, { AddEditProjectHeader } from "../../components/Project/addEditProject";
import { ProjectsTopLeftHeader, ProjectsTopRightHeader } from "../../components/Project";
import useInterval from "../../hooks/useInterval";
import useApi from "../../hooks/api/useApi";

const ProjectPage = () => {
    const navigate = useNavigate();

    const [topHeader, setTopHeader] = useState<ITopHeaderContentProps>();
    const [leftPanel, setLeftPanel] = useState<ISidePanelContentProps>();
    const [rightPanel, setRightPanel] = useState<ISidePanelContentProps>();
    const [mainContent, setMainContent] = useState<React.JSX.Element>();

    useEffect(() => {
        handleShowProjects();
    }, []);

    const handleShowProjects = () => {
        setLeftPanel({
            subheader: <p>Left Header</p>,
            contents: [<div><p>Left Content 1</p></div>]
        });
        setRightPanel({
            subheader: <p>Right Header</p>,
            contents: [<div><p>Right Content 1</p></div>]
        });
        setTopHeader({
            leftContent: <ProjectsTopLeftHeader />,
            rightContent: <ProjectsTopRightHeader
                addProject={handleShowAddEditProject}
            />
        });
        setMainContent(<div>
            <p>Main Content</p>
        </div>);
    }

    const handleShowAddEditProject = () => {
        setLeftPanel(undefined);
        setRightPanel(undefined);
        setTopHeader({
            leftContent: <AddEditProjectHeader
                onExit={handleShowProjects}
            />
        });
        setMainContent(<AddEditProject
            onSubmit={handleAddEditProject}
        />);
    };

    const handleAddEditProject = (formData: any) => {
        console.log("Save Edit Project");
    }

    return (
        <DashboardLayout
            topHeader={topHeader}
            leftSide={leftPanel}
            rightSide={rightPanel}
        >
            {mainContent}
        </DashboardLayout>
    );
}

export default ProjectPage;