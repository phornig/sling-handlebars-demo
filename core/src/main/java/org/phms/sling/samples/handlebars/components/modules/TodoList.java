package org.phms.sling.samples.handlebars.components.modules;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.phms.sling.mvp.impl.presenter.Presenter;
import org.phms.sling.mvp.impl.presenter.serializer.JacksonSerializable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

@Model(adaptables = Resource.class)
@Presenter(resourceTypes = {"demo/components/modules/todolist"})
public class TodoList implements JacksonSerializable {

    private List<Resource> todos;

    public List<Resource> getTodos() {
        return todos;
    }

    @Self
    private Resource resource;

    @PostConstruct
    private void init() {
//        Collections.singletonList(authentication).stream().
//                .map(Authentication::getAuthorities)
//                .flatMap(s -> s.stream())
//
//
//        Collections.list(resource.listChildren())
        Iterator<Resource> children=resource.listChildren();
while(children.hasNext()){

}

        LOG.info("hallo world");
    }
    private static final Logger LOG = LoggerFactory.getLogger(TodoList.class);

}
