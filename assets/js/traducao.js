function translatePage(targetLanguage) {
  const apiKey = 'AIzaSyAPXbbPo89J9jame2kubA22u3TxcBzBWUI'; // Substitua pela sua chave de API do Google Translate

  $('h1, h2, h3, h4, h5, p, li, span, div, a, h6').each(function () {
    const element = $(this);

    // Salvar o texto original, se ainda não estiver salvo
    if (!element.data('originalText')) {
      element.data('originalText', element.html());
    }

    // Traduzir apenas se for para outro idioma
    if (targetLanguage !== 'original') {
      const text = element.text().trim();

      if (text !== "" && !element.children().length) {
        $.ajax({
          url: `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({
            q: text,
            target: targetLanguage,
            format: 'text'
          }),
          success: function (response) {
            const translatedText = response.data.translations[0].translatedText;
            element.html(translatedText);
          },
          error: function (err) {
            console.error('Erro na tradução', err);
          }
        });
      }
    } else {
      // Restaurar texto original
      const originalText = element.data('originalText');
      if (originalText) {
        element.html(originalText);
      }
    }
  });
}

$(document).ready(function () {
  // Restaurar o texto original (em inglês)
  $('#translateButton').click(function () {
    translatePage('original');
  });

  // Traduzir para Espanhol
  $('#translateButton2').click(function () {
    translatePage('es');
  });

  // Traduzir para Português
  $('#translateButton3').click(function () {
    translatePage('pt-BR');
  });
});
