import { Post } from '../types/post';

const post: Post = {
  slug: 'post3',
  date: '2024-02-28T13:27:28Z',
  title: 'Tää on uus post',
  description: 'This is new description',
  thumbnail: 'post3.png',
  content: `
 # Tämä on minun uusi Blogi Post

---

**Advertisement :)**

- [**pica**](https://nodeca.github.io/pica/demo/) - high quality and fast image
resize in browser.
- [**babelfish**](https://github.com/nodeca/babelfish/) - developer friendly
i18n with plurals support and easy syntax.

You will like those projects!

---

# h1 Heading 8-)

## h2 Heading

### h3 Heading

### h4 Heading

### h5 Heading

### h6 Heading

## Horizontal Rules

---

---

---

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'
  `,
};

export default post;