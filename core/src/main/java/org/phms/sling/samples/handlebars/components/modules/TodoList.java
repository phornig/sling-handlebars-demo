package org.phms.sling.samples.handlebars.components.modules;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.phms.sling.mvp.impl.presenter.Presenter;
import org.phms.sling.mvp.impl.presenter.serializer.JacksonSerializable;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Model(adaptables = Resource.class)
@Presenter(resourceTypes = {"demo/components/modules/todolist"})
public class TodoList implements JacksonSerializable {

    private List<String> todos = new ArrayList<>();

    public List<String> getTodos() {
        return todos;
    }

    @Self
    private Resource resource;

    @PostConstruct
    private void init() {
        Iterator<Resource> children=resource.listChildren();
        while (children.hasNext()) {
            todos.add(children.next().getPath());
        }

    }

}
