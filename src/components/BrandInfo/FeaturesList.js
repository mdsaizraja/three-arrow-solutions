import React from "react";

const FeaturesList = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum ",
      description:
        "Nam nunc odio, semper ut sem non, mattis congue ligula. Ut ultricies odio non mattis feugiat. Nulla semper neque eget dui consectetur, nec pulvinar lectus mollis. Cras efficitur eros sed ipsum consequat,",
    },
    {
      id: 2,
      title: "Lorem ipsum ",
      description:
        "Nam nunc odio, semper ut sem non, mattis congue ligula. Ut ultricies odio non mattis feugiat. Nulla semper neque eget dui consectetur, nec pulvinar lectus mollis. Cras efficitur eros sed ipsum consequat,",
    },
    {
      id: 3,
      title: "Lorem ipsum ",
      description:
        "Nam nunc odio, semper ut sem non, mattis congue ligula. Ut ultricies odio non mattis feugiat. Nulla semper neque eget dui consectetur, nec pulvinar lectus mollis. Cras efficitur eros sed ipsum consequat,",
    },
    {
      id: 4,
      title: "Lorem ipsum ",
      description:
        "Nam nunc odio, semper ut sem non, mattis congue ligula. Ut ultricies odio non mattis feugiat. Nulla semper neque eget dui consectetur, nec pulvinar lectus mollis. Cras efficitur eros sed ipsum consequat,",
    },
    {
      id: 5,
      title: "Lorem ipsum ",
      description:
        "Nam nunc odio, semper ut sem non, mattis congue ligula. Ut ultricies odio non mattis feugiat. Nulla semper neque eget dui consectetur, nec pulvinar lectus mollis. Cras efficitur eros sed ipsum consequat,",
    },
    {
      id: 6,
      title: "Lorem ipsum ",
      description:
        "Nam nunc odio, semper ut sem non, mattis congue ligula. Ut ultricies odio non mattis feugiat. Nulla semper neque eget dui consectetur, nec pulvinar lectus mollis. Cras efficitur eros sed ipsum consequat,",
    },
  ];
  return (
    <div>
      <div className="mt-16 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-12">
        {posts.map((post) => (
          <div key={post.id} className="mt-8">
            <p className="text-4xl font-semibold text-black dark:text-white">
              {post.title}
            </p>
            <p className="mt-12 text-3xl leading-relaxed  text-black dark:text-white">
              {post.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturesList;
