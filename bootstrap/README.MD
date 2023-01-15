# Optio Bootstrap Theme

## Creating a new child theme

1. Copy the child-theme folder into the Drupal themes folder.

2. Rename the folder to the name of your theme. (e.g. `my-theme`)

3. Rename the `.info.yml` file. (e.g. `my-theme.info.yml`)

4. Edit the `.info.yml` file and change the theme name. (e.g. `name: My Theme`)

5. Edit the `package.json` file and change the name. (e.g. `"name": "my-theme"`)

6. From Terminal, enter the theme folder.

7. Run `npm install` to install the required build tools.

8. Run `npm run deploy` to build the theme and upload to the development platform.

9. Run `npm run watch` to automatically build and deploy the theme as you make changes.
