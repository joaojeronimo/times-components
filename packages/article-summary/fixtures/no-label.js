import React from "react";
import { ArticleSummaryHeadline, ArticleSummaryContent } from "../";

const defaultByline = "Camilla Long, Environment Editor";
const defaultHeadline =
  "Top medal for forces dog who took a bite out of the Taliban";
const defaultParagraph =
  "The special forces dog fought on under fire, even after shrapnel from Taliban grenades tore into his belly and legs, blew out a front tooth and damaged his right ear.";

export default (
  {
    byline = defaultByline,
    headline = defaultHeadline,
    paragraph = defaultParagraph
  } = {}
) => ({
  datePublicationProps: {
    date: "2017-11-17T00:01:00.000Z",
    publication: "TIMES"
  },
  headline: () => <ArticleSummaryHeadline headline={headline} />,
  bylineProps: {
    ast: [
      {
        name: "inline",
        attributes: {},
        children: [
          {
            name: "text",
            attributes: {
              value: byline
            },
            children: []
          }
        ]
      }
    ]
  },
  content: () => (
    <ArticleSummaryContent
      ast={[
        {
          name: "paragraph",
          attributes: {},
          children: [
            {
              name: "text",
              attributes: {
                value: paragraph
              },
              children: []
            }
          ]
        }
      ]}
    />
  )
});
