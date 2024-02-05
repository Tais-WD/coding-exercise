import React, { FC } from 'react';
import Heading from '../Ion/Heading';

interface HeadingAtomProps {
  title: string;
  content: string;
}

const HeadingAtom: FC<HeadingAtomProps> = ({ title, content }) => {
  return (
    <div>
      <Heading
        content={`${title}: `}
        fontSize="medium"
        fontWeight="bold"
        as="span"
        spacing="none"
      />
      <Heading
        content={content}
        fontSize="medium"
        as="span"
        spacing="none"
      />
    </div>
  );
};

export default HeadingAtom;
