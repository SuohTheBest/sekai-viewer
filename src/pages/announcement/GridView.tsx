import Pin from "~icons/mdi/pin";
import React, { Fragment } from "react";
import { AnnouncementModel } from "../../strapi-model";
import {
  // Avatar,
  Card,
  CardContent,
  // Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Skeleton } from "@mui/material";
import { useTranslation } from "react-i18next";
import LinkNoDecoration from "../../components/styled/LinkNoDecoration";

const GridView: React.FC<{ data?: AnnouncementModel }> = ({ data }) => {
  const { t } = useTranslation();

  return data ? (
    <Fragment>
      <LinkNoDecoration to={`/announcement/${data.id}`}>
        <Card>
          <CardContent>
            <Typography variant="h5">
              {data.isPin && <Pin fontSize="inherit" />} {data.title}
            </Typography>
            <Typography>{data.description}</Typography>
          </CardContent>
          <CardContent>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="subtitle2" color="textSecondary">
                  {t("announcement:category")}:{" "}
                  {t(`announcement:categoryName.${data.category}`)}
                </Typography>
              </Grid>
              {/* <Grid item>
                <Chip
                  label={data.user.nickname}
                  avatar={
                    <Avatar
                      src={data.user.avatar ? data.user.avatar.url : ""}
                    />
                  }
                />
              </Grid> */}
              <Grid item>
                <Typography variant="subtitle2" color="textSecondary">
                  {t("announcement:published_at")}:{" "}
                  {new Date(data.created_at).toLocaleString()}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </LinkNoDecoration>
    </Fragment>
  ) : (
    <Card>
      <CardContent>
        <Typography variant="h5">
          <Skeleton variant="text" width="50%"></Skeleton>
        </Typography>
        <Typography>
          <Skeleton variant="text" width="90%"></Skeleton>
        </Typography>
        <Typography variant="subtitle2">
          <Skeleton variant="text" width="80%"></Skeleton>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GridView;
