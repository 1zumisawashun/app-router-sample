import { TextButtonAnchor } from "@/components";

type SubHeaderProps = {
  children: React.ReactNode;
  href?: string;
  title?: string;
};

export const SubHeader: React.FC<SubHeaderProps> = ({
  children,
  href,
  title,
}) => {
  return (
    <section>
      {href ? (
        <TextButtonAnchor href={href} color="grey">
          ← back
        </TextButtonAnchor>
      ) : null}
      {title ? <h2 className="text-x-small -grey _my-1">{title}</h2> : null}
      {children}
    </section>
  );
};
