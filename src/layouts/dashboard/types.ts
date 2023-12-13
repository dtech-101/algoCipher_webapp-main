export interface ISidePanelContentProps {
  subheader?: JSX.Element;
  subheaderHeight?: string | number;
  contents?: JSX.Element[];
}

export interface ITopHeaderContentProps {
  leftContent?: JSX.Element;
  rightContent?: JSX.Element;
}

export interface IDashboardLayoutProps {
  rightSide?: ISidePanelContentProps;
  leftSide?: ISidePanelContentProps;
  topHeader?: ITopHeaderContentProps;
  children: React.ReactNode;
}

export interface ISidePanelProps {
  width: string | number;
  maxWidth: string | number;
  bgColor: string;
  display: boolean;
  subheader?: JSX.Element;
  subheaderHeight?: string | number;
  contents?: JSX.Element[];
}
