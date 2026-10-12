import React from 'react'
import { Traduction } from '../hooks/Traduction'

interface TraduireProps {
  children: string
  lang: "fr" | "en"
}

const Traduire: React.FC<TraduireProps> = ({ children, lang }) => {
  const texteTraduite = Traduction(children, lang) || children
  return <>{texteTraduite}</>
}

export default Traduire