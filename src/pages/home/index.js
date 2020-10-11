'use strict';

module.exports = function (screen) {
  const taskList = require('./widgets/taskList')(screen);
  const footer = require('./widgets/footer')(screen);
  const nodeInfo = require('./widgets/nodeInfo')(screen);
  const logo = require('./widgets/logo')(screen);
  const deps = require('./widgets/deps')(screen);
  const devdeps = require('./widgets/devdeps')(screen);

  function hide() {
    taskList.detach();
    footer.detach();
    nodeInfo.detach();
    logo.detach();
    deps.detach();
    devdeps.detach();
    screen.render();
  }

  function show() {
    screen.append(taskList);
    screen.append(footer);
    screen.append(nodeInfo);
    screen.append(logo);
    screen.append(deps);
    screen.append(devdeps);
    taskList.focus();
    screen.render();
  }

  // Set tab focus for the lists
  taskList.key('tab', () => {
    deps.focus();
  });

  deps.key('tab', () => {
    devdeps.focus();
  });

  devdeps.key('tab', () => {
    taskList.focus();
  });

  return { hide, show };
};
