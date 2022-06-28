import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Security first',
    Svg: require('@site/static/img/security_icon_with_man.svg').default,
    description: (
      <>
        Schema-first, so you can impose policies declaratively. Deny-By-Default makes your application prevent unintentional security leaks.
      </>
    ),
  },
  {
    title: 'Easy to use',
    Svg: require('@site/static/img/runner_start.svg').default,
    description: (
      <>
        Write a resolver and just add a schema directive (e.g. <code>@hasPermission</code>) to your query or your mutation.
        It will force a policy to your operation.
      </>
    ),
  },
  {
    title: 'Powered by graphql-tools',
    Svg: require('@site/static/img/programmer.svg').default,
    description: (
      <>
        Works with the existing ecosystem! You can use GraphQL Citadel with any GraphQL toolings.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
