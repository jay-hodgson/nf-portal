import React, { Component } from "react"
import PropTypes from "prop-types"

import { SynapseComponents, SynapseConstants } from "synapse-react-client"

class ExploreContent extends Component {
  SynapseTable = (
    <SynapseComponents.QueryWrapper
      initQueryRequest={{
        concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
        partMask:
          SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
          | SynapseConstants.BUNDLE_MASK_QUERY_FACETS
          | SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
        query: {
          isConsistent: false,
          sql: "SELECT * FROM syn16787123",
          limit: 25,
          offset: 0,
          selectedFacets: [],
          sort: [],
        },
      }}
      token={this.props.token}
      sql="SELECT * FROM syn16787123"
      alias="Disease"
      filter="parentId"
    >
      <SynapseComponents.Facets />
      <SynapseComponents.StackedRowHomebrew />
      <SynapseComponents.SynapseTable />
    </SynapseComponents.QueryWrapper>
  );

  render() {
    return (
      <section className="row explore-content center-xs middle-xs">
        <div className="col-xs-12">
          <div className="row">
            <h2>Explore Content</h2>
          </div>
          <div className="row selectors">
            <div className="col-sm-3">
              <button type="button">
                <h3>FUNDERS</h3>
              </button>
            </div>
            <div className="col-sm-3">
              <button type="button">
                <h3>Grants</h3>
              </button>
            </div>
            <div className="col-sm-3">
              <button type="button">
                <h3>Consortia</h3>
              </button>
            </div>
            <div className="col-sm-3">
              <button type="button">
                <h3>Studies</h3>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

ExploreContent.propTypes = {
  token: PropTypes.string.isRequired,
}

export default ExploreContent