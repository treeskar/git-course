const fs = require('fs');
const gitResolver = require('simple-git/promise');

const { EXAMPLES_DIR, REMOTE_EXAMPLES_DIR } = require('./config');

async function initRepository(arg1, arg2, path) {
    const bare = !!arg2;
    const name = bare ? arg2 : arg1;
    if (!name) {
        throw new Error(`Repository name is not defined`);
    }
    path = `${path || EXAMPLES_DIR}/${name}`;
    if (fs.existsSync(path)) {
        throw new Error(`Repository "${name}" already exists in ${path}`);
    }
    try {
        fs.mkdirSync(path);
        const git = gitResolver(path);    
        await git.init(bare);
        console.log(`Repository "${name}" created successfully`);
        if (bare) return;
        await git.addConfig('core.sshCommand', 'ssh -i  ~/Projects/gitCourse/ssh/id_rsa -p 3231');
        await git.addConfig('user.name', 'Alexander Faitelson');
        await git.addConfig('user.email', 'afaitelson@paloaltonetworks.com');
        await git.commit('[=] initial', [], { '--allow-empty': true });
        await git.addTag('initial');
        console.log(`Repository "${name}" configured successfully`);
    } catch(err) {
        throw err;
    }
}

function initRemoteRepository(name) {
    return initRepository(true, name, REMOTE_EXAMPLES_DIR);
}

module.exports = { initRepository, initRemoteRepository };