import { JSX } from "preact";

export const ComponentDocsPage = (
  { sections }: { sections: { example: () => JSX.Element }[] },
) => {
  return (
    <div>
      {sections[0].example()}
    </div>
  );
};
