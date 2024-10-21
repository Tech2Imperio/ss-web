// components/Meta.js
// import Head from 'next/head';

// const Meta = ({ title, description, keywords, url }) => (
//   <Head>
//     <title>{title}</title>
//     <meta name="description" content={description} />
//     <meta name="keywords" content={keywords.join(", ")} />
//     <meta property="og:type" content="website" />
//     <meta property="og:url" content={url} />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//   </Head>
// );

// export default Meta;


// Metadata.js
import Head from 'next/head';

const Metadata = ({ title, description, content, keywords }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content={content} />
    <meta name="keywords" content={keywords} />
  </Head>
);

export default Metadata;

