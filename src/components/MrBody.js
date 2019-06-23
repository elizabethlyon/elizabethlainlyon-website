import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PDF from 'react-pdf-js';

export default class PdfViewer extends Component {
    render() {
        return (
            <div>
                <PDF
                    file="../data/resume-lyon.pdf"
                    onDocumentComplete={this.onDocumentComplete}
                    onPageComplete={this.onPageComplete}
                    // page={this.state.page}
                />
            </div>
        );
    }
}

// export default function BodyContent() {
//     const styleBlock = {
//         width: '500px',
//         height: 'auto'
//     }
//
//     return (
//         <div className="main-body" >
//             <iframe className="pdf"
//             src="./src/data/resume-lyon.pdf" />
//         </div>
//     )
// }
