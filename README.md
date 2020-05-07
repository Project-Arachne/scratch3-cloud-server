# scratch3-cloud-server
Server using [scratch-api](https://github.com/trumank/scratch-api) to connect cloud variables and facilitate packet transfer


See the api for documentation
https://github.com/trumank/scratch-api

To run:

Install node.js

`git clone https://github.com/Project-Arachne/scratch3-cloud-server.git` or download this repository

Run `node main.js`

You will be asked to enter the project id numbers of the scratch projects you wish to bridge. This id can be found in the url of the project, such as https://<!--This HTML comment stops github from showing this url as a link-->scratch.mit.edu/<!--So does this one-->projects/__123456789__

You will also be asked to log in to your account with your username and password. These will be saved in a .scratchSession file in the same directory as the main script so you don't have to re-enter credentials next time.

After this, the project should start syncing the two specified projects. 

**Note:** You may need to reload the scratch projects you are connecting to if they were open before you started the server.
