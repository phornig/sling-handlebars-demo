package org.phms.sling.samples.handlebars.components.modules;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.phms.sling.mvp.impl.presenter.Presenter;
import org.phms.sling.mvp.impl.presenter.serializer.JacksonSerializable;

import javax.annotation.PostConstruct;

@Model(adaptables = Resource.class)
@Presenter(resourceTypes = {"demo/components/modules/todofooter"})
public class TodoFooter implements JacksonSerializable {


    private int count;

    public int getCount() {
        return count;
    }

    @Self
    private Resource resource;

    @PostConstruct
    private void init() {
        //TODO: convert todofooter to a selector of the todolist
        count = resource.getParent().getChild("todos").adaptTo(TodoList.class).getTodos().size();
    }
}
