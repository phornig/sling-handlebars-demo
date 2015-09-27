package org.phms.sling.samples.handlebars.components.modules;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.phms.sling.mvp.impl.presenter.Presenter;
import org.phms.sling.mvp.impl.presenter.serializer.JacksonSerializable;

@Model(adaptables = Resource.class)
@Presenter(resourceTypes = {"demo/components/modules/footer"})
public class Footer implements JacksonSerializable {

}
