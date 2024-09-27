from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,generics
from .serializers import RegisterSerializer, LoginSerializer
from rest_framework.authtoken.models import Token  # Ensure you have Token model imported
from django.contrib.auth.models import User

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            # Check if the username already exists
            username = serializer.validated_data['username']
            if User.objects.filter(username=username).exists():
                return Response({"error": "Username already exists."}, status=status.HTTP_400_BAD_REQUEST)
            
            user = serializer.save()
            return Response({"message": "User registered successfully!"}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)  # This will trigger validation
        username = serializer.validated_data['username']
        user = User.objects.get(username=username)
        token, _ = Token.objects.get_or_create(user=user)  # Retrieve or create token
        return Response({"token": token.key}, status=status.HTTP_200_OK)

from rest_framework import viewsets
from .models import Task  # Assuming you have a Task model
from .serializers import TaskSerializer  # Assuming you have a TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer