import React from "react";
import { Card } from "components";

interface Props {
  lever_id: string;
  createdAt: string;
  descriptionPlain: string;
  categories: {
    commitment: string;
    level: string;
    location: string;
    team: string;
  };
  text: string;
}

export const JobListItem: React.FC<Props> = ({
  lever_id,
  createdAt,
  descriptionPlain,
  categories,
  text,
}) => {
  return (
    <Card>
      <div className="grid-row flex-align-center">
        <div className="grid-col-12 tablet:grid-col-6">
          <h3 className="font-body-md margin-bottom-0">{text}</h3>
          <span className="text-light font-body-xs">{`Posted ${createdAt}`}</span>
        </div>
        <div className="grid-col-12 tablet:grid-col-6 display-flex flex-justify-end">
          {Object.values(categories)
            .filter(Boolean)
            .map((cat) => (
              <span className="usa-tag margin-left-1 bg-base-light">
                {cat.slice(0, 20)}
              </span>
            ))}
        </div>
        <p className="font-body-sm">{descriptionPlain.slice(0, 1000)}</p>
      </div>
    </Card>
  );
};
