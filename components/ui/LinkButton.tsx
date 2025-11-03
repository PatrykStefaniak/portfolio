import { ReactNode } from "react";

type LinkButtonProps = {
    url: string,
    icon?: ReactNode,
    text: string
};

export default function LinkButton(props: LinkButtonProps) {
    const {url, icon, text} = props;

    return (
        <div>
            <a
                href={url}
                className="flex gap-2 border-2 p-[7] rounded-lg border-(--border) hover:bg-(--bg-lighter) hover:border-(--text-dark)"
            >
                {icon}
                {text}
            </a>
        </div>
    );
}