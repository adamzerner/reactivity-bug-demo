import { Stepper } from "../../islands/molecules/stepper.tsx";
import { ComponentDocsPage } from "../../islands/demo/component-docs-page.tsx";

export default () => {
  const sections = [{
    example: () => <Stepper />,
  }];

  // Works
  // return <Stepper />
  // return <div>{sections[0].example()}</div>;

  // Doesn't work
  return <ComponentDocsPage sections={sections} />;
};
