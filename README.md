# cutesc-web

This is the home of the CU Technical Societies Coalition's website, powered by Sheets and Hugo.

The website uses Google Sheets as the data layer (for some abuse of the term "headless CMS") and Hugo, the static site generator written in Go, to combine this data with pretty styles to make a static, super quick-to-load website.

It is hosted on the [SRCF](https://www.srcf.net).

## Notes

* `scripts` contains the fetcher script
* `src` contains the website source

## Development

### Website

1. `git clone https://github.com/matiasilva/cutesc-web.git`
2. `cd src && hugo server`

### Fetcher

1. `cd scripts`
2. Create a virtual environment and activate it

   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```

3. Install dependencies: `pip install -r requirements.txt`

## License

See LICENSE

## Contributors

Matias Silva 2021
