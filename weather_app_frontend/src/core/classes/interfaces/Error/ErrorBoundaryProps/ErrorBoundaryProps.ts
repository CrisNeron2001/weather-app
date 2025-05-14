import { ErrorStateProps } from "../ErrorStateProps/ErrorStateProps";

export interface ErrorBoundaryProps extends ErrorStateProps {
	children: React.ReactNode;
}