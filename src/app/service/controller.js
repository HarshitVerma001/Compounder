const model = require('../../../models/model');
const pageLimit = 8;


// get all the pages using pagination
const getAllPagination = async (req, res) => {
  const compounds = await model.findAndCountAll({
    offset: (req.query.page - 1) * pageLimit | 0,
    limit: pageLimit,
    order: ['ID']
  });
  // console.warn("All the compounds are: ", compounds);
  res.status(200).json({
    data: compounds
  })
}


const updateOrInsertCompound = async (req, res) => {
  const data = req.body;
  const dateTime = new Date()
  compound = null;

  compound = await model.findOne({
    where: {
      CompoundName: data.CompoundName
    }
  })
  // console.warn(" ================================================ I reached  ================================================", compound)
  if (compound != null) {
    // console.warn(" ================================================ compound is updating at  ================================================", compound)
    compound = await model.update({
      ID: compound.ID,
      CompoundName: data.CompoundName,
      CompoundDescription: data.CompoundDescription,
      ImageSource: data.ImageSource,
      ImageAttribution: data.ImageAttribution,
      DateModified: dateTime
    }, {
      where: {
        CompoundName: data.CompoundName
      }
    })
  } else {
    // console.warn(" ================================================ compound is creating at   ================================================", compound)
    const count = await model.count();
    console.warn("count is ", count)
    compound = await model.create({
      ID: count + 1,
      CompoundName: data.CompoundName,
      CompoundDescription: data.CompoundDescription,
      ImageSource: data.ImageSource,
      ImageAttribution: data.ImageAttribution,
      DateModified: dateTime
    });
  }
  res.status(200).json({
    data: compound
  })
}

const getCompound = async (req, res) => {
  const compound = await model.findByPk(req.params.id);
  res.status(200).json({
    data: compound
  })
}

const deleteCompound = async (req, res) => {
  const compound = await model.destroy({
    where: {
      ID: req.params.id
    }
  });
  console.warn("deleted compond is: ", compound);
  res.status(200).json({
    data: compound
  })
}

module.exports = {
  updateOrInsertCompound,
  getAllPagination,
  getCompound,
  deleteCompound
}
