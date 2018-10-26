export const synapseObjects = [
  {
    name: "funder",
    id: "syn16858699",
    filter: "",
    color: 0,
    limit: 3,
    columns: 0,
    table: false,
    type: "FUNDER",
    hash: "/Explore/Funder",
  },
  {
    name: "datasets",
    id: "syn16859580",
    filter: "diseaseFocus",
    color: 5,
    limit: 40,
    columns: 0,
    table: false,
    type: "DATASET",
    hash: "/Explore/Datasets",
  },
  {
    name: "files",
    id: "syn16858331",
    filter: "assay",
    color: 8,
    limit: 0,
    columns: 7,
    table: true,
    type: "",
    hash: "/Explore/Files",
  },
  {
    name: "studies",
    id: "syn16787123",
    filter: "diseaseFocus",
    color: 1,
    limit: 40,
    columns: 0,
    table: false,
    type: "STUDY",
    hash: "/Explore/Studies",
  },
  {
    name: "analysis",
    id: "",
    filter: "",
    color: 0,
    limit: 0,
    columns: 9,
    table: true,
    type: "",
    hash: "/Explore/Analysis",
  },
  {
    name: "publications",
    id: "syn16857542",
    filter: "diseaseFocus",
    color: 0,
    limit: 40,
    columns: 0,
    table: false,
    type: "PUBLICATION",
    hash: "/Explore/Publications",
  },
]

Array.prototype.clone = function () {
  return JSON.parse(JSON.stringify(this))
}

export const returnSynapseValue = (objectArray = synapseObjects, id, nameOfValue) => {
  const matchedObject = objectArray.filter(object => object.id === id)
  return matchedObject[0][nameOfValue]
}

export const setSynapseValue = (objectArray = synapseObjects, id, key, newValue) => {
  objectArray.forEach((object) => {
    if (object.id === id) {
      object[key] = newValue
    }
  })
}
