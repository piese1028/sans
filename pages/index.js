import React from "react";
import Layout from "../components/Layout";
import {Avatar, CardContent, Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";

export default function Home(props) {
    const u = props.state.user

    return (
        <Layout {...props}>
            <Grid container spacing={2}>
                {
                    props.state.user ?
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <Avatar src={u.avatar}/>
                                </CardContent>
                            </Card>
                        </Grid> : null
                }
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            최근글
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                             인기글
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                           애드샌스(곧 추가)
                        </CardContent>
                    </Card>
                </Grid>
          <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                           제안 및 건의
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            공지사항
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}
