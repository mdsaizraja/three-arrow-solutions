import React from "react";
import ContactForm from "./ContactForm";

const CompanyDetailsContact = () => {
  const transferFeatures = [
    {
      id: 1,
      name: "Nam nunc odio, semper ut sem non, mattis congue ligula.",
    },
    {
      id: 2,
      name: "Ut ultricies odio non mattis feugiat.",
    },
    {
      id: 3,
      name: "Nulla semper neque eget dui consectetur, nec pulvinar lectus mollis.",
    },
    {
      id: 4,
      name: "Nam nunc odio, semper ut sem non, mattis congue ligula.",
    },
    {
      id: 5,
      name: "Ut ultricies odio non mattis feugiat.",
    },
    {
      id: 6,
      name: "Nulla semper neque eget dui consectetur, nec pulvinar lectus mollis.",
    },
  ];

  return (
    <div className="w-full mt-16 lg:mt-52 lg:flex lg:grid-cols-2 lg:gap-20 ">
      <div className="lg:w-3/5 relative">
        <h3 className="text-3xl font-semibold text-black dark:text-white sm:text-7xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <p className="mt-28 text-3xl leading-relaxed  text-black dark:text-white">
          Nam nunc odio, semper ut sem non, mattis congue ligula. Ut ultricies
          odio non mattis feugiat. Nulla semper neque eget dui consectetur, nec
          pulvinar lectus mollis. Cras efficitur eros sed ipsum consequat, sit
          amet imperdiet velit auctor. Etiam elementum pharetra nisi nec
          convallis. Mauris eu pulvinar ante.
        </p>
        <p className="mt-16 text-3xl leading-relaxed  text-black dark:text-white">
          Nam nunc odio, semper ut sem non, mattis congue ligula. Ut ultricies
          odio non mattis feugiat. Nulla semper neque eget dui consectetur, nec
          pulvinar lectus mollis. Cras efficitur eros sed ipsum consequat,
        </p>

        <dl className="mt-20 w-4/5 space-y-8">
          {transferFeatures.map((item) => (
            <div key={item.id} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-8 w-8 border-2 border-[#E99080] rounded-full bg-transparent text-white"></div>
                <p className="ml-12 text-3xl leading-14  text-black dark:text-white">
                  {item.name}
                </p>
              </dt>
            </div>
          ))}
        </dl>
      </div>

      <div className="lg:w-2/5 mt-10 -mx-4 lg:mt-0" aria-hidden="true">
        <ContactForm />
      </div>
    </div>
  );
};

export default CompanyDetailsContact;
