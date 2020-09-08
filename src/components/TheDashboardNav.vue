<template>
  <div>
    <nav class="dashboard-navbar">
      <div>
        <i class="fas fa-bars"></i> Dashboard
      </div>
      <div>
        <ul>
          <li>
            <span>
              <i class="fas fa-user"></i>
            </span>
          </li>
          <li>{{userProfile.name}}</li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TheDashboardNav',
  props: {
    userProfile: {
      type: Object
    }
  },
};
</script>

<style lang="scss" scoped>
.dashboard-navbar {
  width: 90%;
  background: #fff;
  height: 1rem;
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;

  ul {
    list-style: none;

    li {
      display: inline;
      margin: 10px;
    }
  }

  span {
    height: 50px;
    width: 50px;
    padding: 10px;
    border: 0.1rem #000 solid;
    border-radius: 50%;
  }
}
</style>
