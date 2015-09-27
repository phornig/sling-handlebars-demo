package org.phms.sling.samples.handlebars.components.page;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.phms.sling.mvp.impl.presenter.Presenter;
import org.phms.sling.mvp.impl.presenter.serializer.JacksonSerializable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;

@Model(adaptables = Resource.class)
@Presenter(resourceTypes = {"demo/components/page"})
public class PagePresenter implements JacksonSerializable {
    private static final Logger LOG = LoggerFactory.getLogger(PagePresenter.class);

    @ValueMapValue(optional = true)
    private String title;

    public String getTitle() {
        return title + " presented by PagePresenter";
    }

    @PostConstruct
    private void init() {
        LOG.info("hallo world");
    }

}
