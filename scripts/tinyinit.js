

tinymce.init({
  selector: 'textarea#opis',  // change this value according to your HTML
  language: 'pl',
  language_url: 'scripts/tinymce/langs/pl.js',  
  
  content_css : [
    '/matzoo/css/tiny.css',
    '/css/tiny.css',
  ],
  
  plugins : 'advlist autolink textcolor colorpicker link image  media lists fullpage charmap print preview code contextmenu hr table spellchecker wordcount emoticons' ,

  toolbar: [
    '    bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | link | bullist numlist outdent indent | code image ',
            ' styleselect  | fontsizeselect fontselect ',
  ] ,
    menu: {
    file: {title: 'File', items: 'print'},
    edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
    insert: {title: 'Insert', items: 'link media | template hr'},
    view: {title: 'View', items: 'visualaid'},
    format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
    table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'},
    tools: {title: 'Tools', items: 'spellchecker code'}
  },
  
  menubar: 'file edit view format table ',
  automatic_uploads: true,
  contextmenu: "link image inserttable | cell row column deletetable",
  images_upload_base_path: '/uploads',
  
  
  file_browser_callback: function(field_name, url, type, win) {
        $('input[name=photo]').click();
        win.document.getElementById(field_name).value = $('input[name=destname]').val();
    
  },
  
  
});