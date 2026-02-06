import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    //caso queria usar um link externo para a imagem, basta usar a tag img normal, como no exemplo abaixo:
    Svg: () => <img src="https://cbmstg.blob.core.windows.net/chatbots/cb1000019/Chat-Suri.png" alt="Suri Logo" className={styles.featureSvg} />,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    Svg: () => <img src="https://cdn.prod.website-files.com/5f99af040fc8a6ae400fc29d/67571f651d55363942606f5f_suri_shop_logo_vertical.png" alt="Suri Logo" className={styles.featureSvg} />,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    Svg: () => <img src="https://cdn.prod.website-files.com/5f99af040fc8a6ae400fc29d/67800b9fcb997520711b2d75_img_assistant.jpg" alt="Suri Logo" className={styles.featureSvg} />,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
