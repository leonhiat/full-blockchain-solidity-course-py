import React from 'react';
import Typography from 'typography';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers'
import { TypographyStyle } from 'utils/typography'

export default class Html extends React.Component {
  render() {
    let title;
    title = DocumentTitle.rewind();
    if (this.props.title) {
      title = this.props.title;
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name='viewport' content='user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0'/>
          <title>{this.props.title}</title>
          <link rel="shortcut icon" href={this.props.favicon}/>
          <TypographyStyle/>
          <style dangerouslySetInnerHTML={{__html:
            `
              body {
                color: rgb(66,66,66);
              }
              h1,h2,h3,h4,h5,h6 {
                color: rgb(44,44,44);
              }
              a {
                color: rgb(42,93,173);
                text-decoration: none;
              }
              a:hover {
                text-decoration: underline;
              }
            `
          }}/>
        </head>
        <body className="landing-page">
          <div id="react-mount" dangerouslySetInnerHTML={{__html: this.props.body}} />
          <script src={link("/bundle.js")}/>
        </body>
      </html>
    );
  }
}
Html.defaultProps = { body: "" };
