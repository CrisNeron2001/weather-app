import { ComponentType, useEffect } from "react";

export function WithArticle<T extends object>(WrappedComponent: ComponentType<T>) {
	const ComponentWithArticle = (props: T) => {
		useEffect(() => {
			console.log(WrappedComponent);
		}, []);

		return (
		<article className="flex justify-center size-auto">
			<WrappedComponent {...props}/>
		</article>
	);
	}
	return ComponentWithArticle;
}