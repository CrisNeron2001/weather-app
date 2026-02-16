import { ComponentType, useEffect } from "react";

export function WithArticle<T extends object>(WrappedComponent: ComponentType<T>) {
	const ComponentWithArticle = (props: T) => {
		useEffect(() => {
			console.log(WrappedComponent);
		}, []);

		return (
		<article className="flex justify-center size-auto w-full h-100 p-4">
			<WrappedComponent {...props}/>
		</article>
	);
	}
	return ComponentWithArticle;
}