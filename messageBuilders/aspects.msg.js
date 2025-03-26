const _titles = ["Major aspect:", "Minor aspect:", "Stains of.."];

const createAspectReplyFields = (aspectArray) => {
  const _replyFields = [];

  for (let i = 0; i < aspectArray.length; i++) {
    const _aspect = aspectArray[i];

    _replyFields.push({
      name: `${_titles[i]} ${_aspect.name}`,
      value: i > 0 ? _aspect.descriptionShort : _aspect.descriptionExpanded,
      inline: aspectArray.length > 2 && i > 0,
    });
  }

  return _replyFields;
};

const createAspectHeaderFields = (aspects) => {
  const _replyFields = [
    { name: _titles[0], value: aspects[0].name, inline: true },
    {
      name: _titles[1],
      value: aspects[1].name,
      inline: true,
    },
  ];

  if (aspects.length > 2) {
    for (let i = 2; i < aspects.length; i++) {
      _replyFields.push({
        name: _titles[2],
        value: aspects[i].name,
        inline: true,
      });
    }
  }

  return _replyFields;
};

module.exports = {
  createAspectHeaderFields,
  createAspectReplyFields,
};
