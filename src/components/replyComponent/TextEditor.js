import React from 'react';
import {Editor} from '@tinymce/tinymce-react';
import parse from 'html-react-parser';

const TextEditor = ({SetAnswer}) => {
  const handleEditorChange = (content, editor) => {
    SetAnswer (content);
    // console.log ('Content was updated:', content);
  };

  return (
    <Editor
      initialValue=" "
      apiKey="6zfdz2vb9rz2gg2liptwfxsbeeuhuung7rkugyxkfi29o1f3"
      init={{
        selector: 'textarea', // change this value according to your HTML
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code codesample fullscreen',
          'insertdatetime media table code help wordcount',
          'a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable',
        ],
        toolbar: 'undo redo | formatselect fontselect fontsizeselect forecolor| bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist | removeformat |casechange code codesample help',
        menubar: 'tools',
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default TextEditor;
