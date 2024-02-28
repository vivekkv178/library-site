import { SectionTitle } from "@vivekkv178/library";

const Storybook = () => {
  return (
    <section id="storybook" className="px-8 mx-4">
      <SectionTitle title="Storybook" />
      <div className="h-screen mb-20 border border-black border-double rounded-lg">
        <iframe
          src="https://65cae300ea18b31baa85c4fe-rkuqxdhiaa.chromatic.com/?path=/docs/getting-started-create-library--docs"
          // src="https://65cae300ea18b31baa85c4fe-rkuqxdhiaa.chromatic.com/?path=/docs/ui-components-button--docs"
          // src="https://main--65cae300ea18b31baa85c4fe-rkuqxdhiaa"
          width="100%"
          height="100%"
          className="rounded-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default Storybook;
