function Article({ titulo, autor, data, conteudo }) {
  return (
    <main>
      <article>
        <h2>{titulo}</h2>
        <p><strong>Autor:</strong> {autor}</p>
        <time dateTime="2026-02-25">{data}</time>
        <p>{conteudo}</p>
        <figure>
          <img src="/muroalto.jpeg" alt="Uma praia do nordeste muito bela" />
          <figcaption>Praia Nordeste</figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Article;
