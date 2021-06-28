//Build function to read json file using D3
function buildMetaData(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      console.log(metadata);

    // Filter the data
    var buildingArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = buildingArray[0];
    // Use d3 to select the required panel
    var panelData = d3.select("#sample-metadata");

    // Clear the existing data in the html
    panelData.html("");

    // Use `Object.entries` to add each key and value pair to the panelData
    Object.entries(result).forEach(([key, value]) => {
      panelData.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}
