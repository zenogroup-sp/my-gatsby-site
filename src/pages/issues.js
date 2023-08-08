import * as React from 'react'
import Layout from '../components/layout'
import Grid from '../components/grid'
import Widget from "../components/widget"

const IssuesPage = () => {
    <Layout pageTitle={"Key Issues View"}>
        <Grid style={{gridGap: "16px"}}>
            <Widget row={1} column={1}>
                <p>Some content</p>
            </Widget>
        </Grid>
    </Layout>

}


export default IssuesPage