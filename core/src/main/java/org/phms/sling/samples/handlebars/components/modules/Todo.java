package org.phms.sling.samples.handlebars.components.modules;

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
@Presenter(resourceTypes = {"demo/components/modules/todo"})
public class Todo implements JacksonSerializable {
    @ValueMapValue(optional = true)
    private String name;
    @ValueMapValue(optional = true)
    private boolean completed;

    public boolean isCompleted() {
        return completed;
    }

    public String getName() {
        return name;
    }
    @PostConstruct
    private void init() {
        LOG.info("hallo world");
    }
    private static final Logger LOG = LoggerFactory.getLogger(Todo.class);

}
