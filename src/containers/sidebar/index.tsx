import _ from 'lodash';
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import FeaturePost from '../../components/feature-post/feature-post';
import {
  SidebarWrapper,
  SidebarWidget,
  WidgetTitle,
  TagItem,
} from './style';

type SidebarProps = {};

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 5
      ) {
        edges {
          node {
            excerpt(pruneLength: 300)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD [<span>] MMMM [</span>]", locale: "vi")
              title
              description
              tags
              cover {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
        }
      }
    }
  `);

  const Posts = Data.allMarkdownRemark.edges;
  const Tags = Data.allMarkdownRemark.group;

  return (
    <SidebarWrapper>
      <SidebarWidget>
        <WidgetTitle>Tin tức mới nhất</WidgetTitle>
        {Posts.map(({ node }: any) => {
          const title = node.frontmatter.title || node.fields.slug;
          // Random Placeholder Color
          const placeholderColors = [
            '#55efc4',
            '#81ecec',
            '#74b9ff',
            '#a29bfe',
            '#ffeaa7',
            '#fab1a0',
            '#e17055',
            '#0984e3',
            '#badc58',
            '#c7ecee',
          ];
          const setColor =
            placeholderColors[
              Math.floor(Math.random() * placeholderColors.length)
            ];

          return (
            <FeaturePost
              key={node.fields.slug}
              title={title}
              image={
                node.frontmatter.cover == null
                  ? null
                  : node.frontmatter.cover.childImageSharp.gatsbyImageData
              }
              url={node.fields.slug}
              tags={node.frontmatter.tags}
              placeholderBG={setColor}
            />
          );
        })}
      </SidebarWidget>

      <SidebarWidget>
        <WidgetTitle>Tags</WidgetTitle>
        {Tags.map((tag: any) => (
          <TagItem key={tag.fieldValue}>
            <span>#</span>
            <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} <span>({tag.totalCount})</span>
            </Link>
          </TagItem>
        ))}
      </SidebarWidget>
    </SidebarWrapper>
  );
};

export default Sidebar;
