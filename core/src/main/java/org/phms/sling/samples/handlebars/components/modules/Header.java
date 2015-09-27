package org.phms.sling.samples.handlebars.components.modules;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.phms.sling.mvp.impl.presenter.Presenter;
import org.phms.sling.mvp.impl.presenter.serializer.JacksonSerializable;

@Model(adaptables = Resource.class)
@Presenter(resourceTypes = {"demo/components/modules/header"})
public class Header implements JacksonSerializable {

    @ValueMapValue(optional = true)
    private String title;

    public String getTitle() {
        return title;
    }
}
