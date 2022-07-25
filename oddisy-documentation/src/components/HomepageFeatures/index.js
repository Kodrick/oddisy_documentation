import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import stayOrg from '../../../static/img/Stay_Organized.png'
import fleshOutWorld from '../../../static/img/Flesh Out Your World.png'
import visCon from '../../../static/img/Visualize Connections.png'

const FeatureList = [
  {
    title: 'Stay Organized',
    image: stayOrg,
    description: (
      <>
        Keep Track of All of your Characters, Locations, Items, etc.
      </>
    ),
  },
  {
    title: 'Flesh Out Your World',
    image: fleshOutWorld,
    description: (
      <>
        Detail out everything about your world in an easy-to-use Database
      </>
    ),
  },
  {
    title: 'Visualize Connections',
    image: visCon,
    description: (
      <>
        Link everything together with visual connections between all of your entries using the High Level View
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center featureImage">
      <img src={image} className="featureImage"></img>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
