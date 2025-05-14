import { Component } from "react";
import { ErrorBoundaryProps } from "../../interfaces/Error/ErrorBoundaryProps/ErrorBoundaryProps";
import { ErrorBoundaryState } from "../../interfaces/Error/ErrorBoundaryState/ErrorBoundaryState";
import { ErrorCard } from "../../../../domain/components/errors/CoreError/Card/ErrorCard";

export class ErrorBoundary extends Component <ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {hasError: false};
	}
	static getDerivedStateFromError(): ErrorBoundaryState {
		return {hasError: true};
	}
	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}
	render() {
		if (this.state.hasError) {
			return <ErrorCard errorStatus={500} />;
		}
		return this.props.children;
	}
}