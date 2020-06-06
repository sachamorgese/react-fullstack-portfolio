// @flow
import React from "react";
import "../../../style/components/Shared/Header.Module.scss"
import { Link } from 'react-router-dom';

const locationsEnum = {
  '/blog/': 'Blog',
  '/portfolio/': 'Portfolio'
}

type LocationType = $Keys<typeof locationsEnum>;

export default function Header ({ location }: { location: LocationType }): React$Element<any> {
  return <Link className="AppHeader" to={`${location}home`}><h1>{`Sacha's ${locationsEnum[location]}`}</h1></Link>
}