# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)

class BlogPostsController < ApplicationController
  def index

    # ^ This is the class and it defines what behavior exists in the object. In this, BlogPost is a controller and it is connected to another controller called Applications.

    # ---2)

    @posts = BlogPost.all
  end

  # ^  This is an instance vaiable and it holds the active record qwery Blogposts.all

  # ---3)

  def show
    @post = BlogPost.find(params[:id])
  end

  # ^  This is also an instance vaiable and it holds the active record qwery Blogposts. But it is also askting to show the params for the id blogpost.
  
  # ---4)

  def new
    @post = BlogPost.new
  end
  def create

    # This is saying to create a new blog post.


    # ---5)

    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end
  def edit

    # This is saying to create a new blog post with the params and if it is valid redirect it to the blog post, otherwise redirect it to a new blog post path.
    
    # ---6)

    @post = BlogPost.find(params[:id])
  end
  def update
    @post = BlogPost.find(params[:id])

    # This is saying to update the blogpost id params

    # ---7)

    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end
  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else

      # This is saying to update a new blog post and post it and to also destroy a blog post.


      # ---8)

      redirect_to blog_post_path(@post)
    end
    end

    # This is redirecting to a different blog post path.

  # ---9)

  private
  def blog_post_params

    # This is saying that the blog post params can only be called from the class where it is defined.

    # ---10)

    params.require(:blog_post).permit(:title, :content)
  end
end

# This is saying what params are required and what is needed to permit it.
